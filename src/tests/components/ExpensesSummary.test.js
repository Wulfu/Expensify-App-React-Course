import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 1 expense' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={1}
      expensesTotal={666}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={56}
      expensesTotal={6825966}
    />
  );
  expect(wrapper).toMatchSnapshot();
});