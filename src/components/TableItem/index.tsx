import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';
import { BsFillTrashFill } from 'react-icons/bs';

type Props = {
  item: Item;
  deleteItem: (item: Item) => void;
};

export const TableItem = ({ item, deleteItem }: Props) => {
  return (
    <C.TableLine>
      <C.TableCollumn>{formatDate(item.date)}</C.TableCollumn>
      <C.TableCollumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableCollumn>
      <C.TableCollumn>{item.title}</C.TableCollumn>
      <C.TableCollumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value.toFixed(2)}
        </C.Value>
      </C.TableCollumn>
      <C.TableCollumn>
        <BsFillTrashFill size={25} onClick={() => deleteItem(item)} />
      </C.TableCollumn>
    </C.TableLine>
  );
};
