import { supabase } from "./lib/supabase";
import * as vscode from "vscode";
import { clearSessions, getSessions } from "./tracker";

export async function startSendingSessions(context: vscode.ExtensionContext) {
  setInterval(
    async () => {
      const token = await context.secrets.get("devsteak_api_token");
      const user_id = await context.secrets.get("devsteak_user_id");

      if (!token || !user_id) {
        console.error("API token or user ID not found. Cannot send sessions.");
        return;
      }

      if (token) {
        const sessions = getSessions();
        if (sessions.length === 0) return;

        try {
          const { data, error } = await supabase.from("sessions").insert(
            sessions.map((session) => ({
              user_id: user_id,
              language: session.language,
              duration_seconds: session.duration,
              session_date: session.session_date,
              recorded_at: session.recorded_at,
            })),
          );

          if (error) {
            console.error("Failed to send sessions:", error);
            return;
          }

          await supabase
            .from("profiles")
            .update({ last_active_at: new Date() })
            .eq("id", user_id);

          clearSessions();
        } catch (error) {
          console.error("Failed to send sessions:", error);
        }
      }
    },
    5 * 60 * 1000,
  ); // send every 5 minutes
}
