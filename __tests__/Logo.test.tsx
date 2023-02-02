/* eslint-disable @typescript-eslint/no-unused-vars */
import renderer from 'react-test-renderer';
import tw, { styled, css, theme } from 'twin.macro';
import Logo from '../components/Logo';

jest.mock('twin.macro');

const renderTree = tree => renderer.create(tree);
describe('<Logo>', () => {
  it('should render component', () => {
    expect(renderTree(<Logo />).toJSON()).toMatchSnapshot();
  });
});
