interface props {
  name: string;
  completed: boolean;
}
export const Todo = ({ name, completed }: props) => {
  return <>{name}</>;
};
