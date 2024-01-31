export type Props = {
  style?: string;
};

export default function Divider({ style }: Props) {
  return (
    <div
      className={`hidden w-full h-px md:block bg-zinc-800 ${
        style ? style : ''
      }`}
    />
  );
}
