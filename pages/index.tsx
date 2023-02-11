import tw from 'twin.macro';
import { Table } from '../components';

const getShortName = fullName => {
  return fullName
    .split(' ')
    .map(n => n[0])
    .join('');
};

const getData = () => [
  {
    name: 'Jerome Bell',
    isCovered: true,
    isSubscriber: true,
    insurance: 'Primary',
    id: ''
  },
  {
    name: 'Stacy Bell',
    isCovered: true,
    isSubscriber: false,
    insurance: 'Primary',
    id: ''
  },
  {
    name: 'Rebecca Bell',
    isCovered: false,
    isSubscriber: false,
    insurance: '',
    id: ''
  }
];

const styles = {
  container: () => [tw`flex flex-col p-8`],
  checkboxes: () => [tw`text-left pl-8`]
};

const makeColumns = () => {
  return [
    {
      Header: 'Covered 🛈',
      accessor: 'isCovered',
      Cell: row => {
        return (
          <div css={styles.checkboxes()}>
            <input
              type="checkbox"
              defaultChecked={row.value == true ? true : false}
            />
          </div>
        );
      }
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Subscriber',
      accessor: 'isSubscribed'
    },
    {
      Header: 'Insurance',
      accessor: 'insurance',
      Cell: row => {
        return (
          <div className="relative w-full lg:max-w-sm">
            <select
              defaultChecked={row.value != '' ? 'Primary' : 'Seconday'}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option>Primary</option>
              <option>Secondary</option>
              <option defaultValue hidden></option>
            </select>
          </div>
        );
      }
    },
    {
      Header: 'ID',
      accessor: 'id'
    }
  ];
};

const App = () => (
  <>
    <div css={styles.container()}>
      <Table columns={makeColumns()} data={getData()} />
    </div>
  </>
);

export default App;
