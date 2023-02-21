import tw from 'twin.macro';
import { Table } from '../components';

/* const getShortName = fullName => {
  return fullName
    .split(' ')
    .map(n => n[0])
    .join('');
}; */

const getData = () => [
  {
    name: 'Jerome Bell',
    isCovered: true,
    isSubscriber: true,
    insurance: true,
    id: ''
  },
  {
    name: 'Stacy Bell',
    isCovered: true,
    isSubscriber: false,
    insurance: true,
    id: ''
  },
  {
    name: 'Rebecca Bell',
    isCovered: false,
    isSubscriber: false,
    insurance: false,
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
              defaultChecked={row.value != true ? 'Primary' : 'Secondary'}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option>Primary</option>
              <option>Secondary</option>
              <option defaultValue></option>
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
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
