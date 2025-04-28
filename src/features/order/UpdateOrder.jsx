import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line no-unused-vars
export async function action({ _, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
