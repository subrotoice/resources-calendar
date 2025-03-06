import { Payment } from "../columns";

interface Props {
  entity: Payment;
}
const ReadEntity = ({ entity }: Props) => {
  return <div>{entity.id}ReadEntity</div>;
};

export default ReadEntity;
