import { Search } from './Search';
import { render , screen } from "@testing-library/react";

it('should have a text box', () => {
    render(<Search></Search>);
    const search = Search();

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();


  });