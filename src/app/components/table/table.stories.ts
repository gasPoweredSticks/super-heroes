// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from './table.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'table',
  component: TableComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const heroes = [
  {
    name: 'Kathryn Murphy',
    phone: '(252) 555-0126',
    email: 'tanya.hill@example.com',
    date: 'March 6, 2018',
    country: 'Saudi Arabia',
    company: "L'Oreal",
  },
  {
    name: 'Kathryn Murphy',
    phone: '(252) 555-0126',
    email: 'tanya.hill@example.com',
    date: 'March 6, 2018',
    country: 'Saudi Arabia',
    company: "L'Oreal",
  },
  {
    name: 'Kathryn Murphy',
    phone: '(252) 555-0126',
    email: 'tanya.hill@example.com',
    date: 'March 6, 2018',
    country: 'Saudi Arabia',
    company: "L'Oreal",
  },
  {
    name: 'Kathryn Murphy',
    phone: '(252) 555-0126',
    email: 'tanya.hill@example.com',
    date: 'March 6, 2018',
    country: 'Saudi Arabia',
    company: "L'Oreal",
  },
];

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

Template.args = {
  heroes,
};

export const Primary = Template.bind({});
