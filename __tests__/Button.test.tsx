/* eslint-disable @typescript-eslint/no-unused-vars */
import tw, { styled, css, theme } from 'twin.macro';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

jest.mock('twin.macro');

const PrimaryButtonTest = `<Button variant="primary">Submit</Button>`;
const SecondaryButtonTest = `<Button variant="secondary">Cancel</Button>`;
const SmallButtonTest = `<Button isSmall>Close</Button>`;

test('Primary Button renders correctly', () => {
  expect(renderer.create(PrimaryButtonTest).toJSON()).toMatchSnapshot();
});

test('Secondary Button renders correctly', () => {
  expect(renderer.create(SecondaryButtonTest).toJSON()).toMatchSnapshot();
});

test('Small Button renders correctly', () => {
  expect(renderer.create(SmallButtonTest).toJSON()).toMatchSnapshot();
});
