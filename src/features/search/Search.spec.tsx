import { Search, logicOfuseHasResults } from './Search';
import { dataType, queryFormatter, useFetchInfoQuery } from "./search-api-slice";



it('useHasResults hook should initially "have results"', () => {

  const data : dataType | undefined = undefined;
  const preSearch : boolean = true;

  const hasResults = logicOfuseHasResults(preSearch, data);

  expect(hasResults).toBe(true);

})

it('useHasResults hook with data should "have results"', () => {

  const data : dataType | undefined = { resultCount : 10 , results : [] };
  const preSearch : boolean = false;

  const hasResults = logicOfuseHasResults(preSearch, data);

  expect(hasResults).toBe(true);

})

it('useHasResults hook without data should "have no results"', () => {

  const data : dataType | undefined = { resultCount : 0 , results : [] };
  const preSearch : boolean = false;

  const hasResults = logicOfuseHasResults(preSearch, data);

  expect(hasResults).toBe(false);

})

it('query formatter should correctly format query', () =>{

  expect(queryFormatter('david bowie')).toBe("?term=david+bowie&media=music");
  expect(queryFormatter(' david bowie ')).toBe("?term=david+bowie&media=music");

})



