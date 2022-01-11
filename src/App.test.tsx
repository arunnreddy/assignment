import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Movie} from "./Movies/Movie"
Enzyme.configure({ adapter: new Adapter() });

test("checking h1 tag",()=>{
  const Wrapper=shallow(Movie);
  expect(Wrapper.find("h1").text()).toContain("shop")
})
