/* eslint-disable @typescript-eslint/no-unused-vars */
import tw, { styled, css, theme } from 'twin.macro';
import { expect, jest, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

jest.mock('twin.macro');

const PrimaryButtonTest = `<Button variant="primary">Submit</Button>`;
const SecondaryButtonTest = `<Button variant="secondary">Cancel</Button>`;
const SmallButtonTest = `<Button isSmall>Close</Button>`;

describe('Button Tests', () => {
  it('Primary Button renders correctly', () => {
    expect(renderer.create(PrimaryButtonTest).toJSON()).toMatchSnapshot();
  });

  it('Secondary Button renders correctly', () => {
    expect(renderer.create(SecondaryButtonTest).toJSON()).toMatchSnapshot();
  });

  it('Small Button renders correctly', () => {
    expect(renderer.create(SmallButtonTest).toJSON()).toMatchSnapshot();
  });
});
