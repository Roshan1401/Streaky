import { useState } from "react";
import banner from "../../assets/banner.jpg";
import profilImg from "../../assets/image.png";
import {
  SocialLinkModal,
  platforms,
  type SocialLink,
} from "../Modals/SocialLinkModal";
import EditModal  from "../Modals/EditModal";

interface Props {}

function SocialLinkButton({
  svg,
  label,
  url,
}: {
  svg: React.ReactNode;
  label: string;
  url?: string;
}) {
  const Component = url ? "a" : "button";
  return (
    <Component
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-(--color-text-primary) shadow-2xl w-fit flex gap-3 items-center px-3 py-1.5 cursor-pointer rounded-lg border border-(--color-border-secondary) hover:border-orange-400 transition-colors"
    >
      {svg}
      <span className="font-medium text-md">{label}</span>
    </Component>
  );
}

function ProfileHeader(props: Props) {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      platform: "github",
      label: "GitHub",
      svg: platforms[0].svg,
      url: "https://github.com/roshanpatil",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setzIsEditModalOpen] = useState(false);

  const handleAddLink = (link: SocialLink) => {
    setSocialLinks([...socialLinks, link]);
  };

  return (
    <div>
      <SocialLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddLink={handleAddLink}
        existingPlatforms={socialLinks.map((l) => l.platform)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setzIsEditModalOpen(false)}
      />

      <div className="relative ">
        <div className="h-70  bg-black border border-(--color-border) overflow-hidden">
          <img
            src={banner}
            className="object-cover h-full w-full "
            alt="Banner"
          />
        </div>
        <div className="size-50 rounded-full border-2 border-orange-400 dark:border-black  overflow-hidden absolute -bottom-25 left-1/8 hover:scale-105 transition-all duration-200   transform -translate-x-1/2">
          <img
            src={profilImg}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
      <div className=" relative pt-32">
        <div className="px-10 flex flex-col  gap-2">
          <span className="text-(--color-text-primary) text-4xl font-bold">
            Roshan Patil
          </span>
          <span className="text-(--color-text-secondary) text-xl">
            @patilrosha99
          </span>
          <span className="text-(--color-text-primary) mt-2 text-xl">
            Learning web dev
          </span>
          <div className="mt-7 flex items-center gap-5">
            {socialLinks.map((link) => (
              <SocialLinkButton
                key={link.platform}
                svg={link.svg}
                label={link.label}
                url={link.url}
              />
            ))}

            <button
              onClick={() => setIsModalOpen(true)}
              className="border rounded-full px-2 py-2 cursor-pointer hover:scale-115 transition-all duration-100 text-3xl text-center flex items-center justify-center  border-(--color-border-secondary) hover:border-orange-400 "
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute top-29 right-5 p-4">
          <button
            onClick={() => setzIsEditModalOpen(true)}
            className="text-white bg-orange-500 shadow-2xl w-fit flex gap-3 items-center px-4 py-2 cursor-pointer rounded-lg hover:scale-105 transition-all duration-100  border border-(--color-border-secondary) "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
              <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
            </svg>
            <span className="font-bold text-xl ">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
