interface CardProps {
  title: string;
  value: string | number;
  description: string;
}

function ActivityCard(props: CardProps) {
  const { title, value, description } = props;

  return (
    <div className="rounded-md border border-(--color-border) bg-(--color-bg-secondary) p-2 hover:border-orange-400">
      <div className="text-xs tracking-wider text-(--color-text-secondary) uppercase">
        {title}
      </div>
      <div className="mt-2 text-xl font-bold text-(--color-text-primary) xl:text-2xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-(--color-text-secondary)">
        {description}
      </div>
    </div>
  );
}

export default ActivityCard;
