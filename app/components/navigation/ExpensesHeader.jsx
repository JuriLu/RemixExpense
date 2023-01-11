import {Form, NavLink, useLoaderData} from '@remix-run/react';

import Logo from '../util/Logo';

export default function ExpensesHeader() {
    const userId = useLoaderData()


    return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Analyze Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="delete" action="/logout" id="logout-form">
          <button className="cta">Logout</button>
        </Form>
      </nav>
    </header>
  );
}

