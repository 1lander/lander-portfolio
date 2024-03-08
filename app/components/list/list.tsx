import { ListProps } from "./list.types";

export const List = ({ title, items }: ListProps) => {
  return (
    <>
      <h4 className="text-2xl mt-5 text-ocean font-bold">{title}</h4>
      <ul className="list-disc ml-6">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default List;