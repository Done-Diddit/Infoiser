import { Search } from './Search';
import { render , screen } from "@testing-library/react";
import { queryFormatter } from "./search-api-slice";
/*
it('should have a text box', () => {
    render(<Search></Search>);
    const search = Search();

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();


  });
*/
it('query formatter should correctly format query', () =>{

  expect(queryFormatter('david bowie')).toBe("?term=david+bowie&media=music");
  expect(queryFormatter(' david bowie ')).toBe("?term=david+bowie&media=music");

})