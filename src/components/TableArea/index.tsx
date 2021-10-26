import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import * as C from './styles';

type Props = {
  list: Item[];
  deleteItem: (item: Item) => void;
};

export const TableArea = ({ list, deleteItem }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumm>Data</C.TableHeadColumm>
          <C.TableHeadColumm>Categoria</C.TableHeadColumm>
          <C.TableHeadColumm>Título</C.TableHeadColumm>
          <C.TableHeadColumm>Valor</C.TableHeadColumm>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} deleteItem={deleteItem} />
        ))}
      </tbody>
    </C.Table>
  );
};
