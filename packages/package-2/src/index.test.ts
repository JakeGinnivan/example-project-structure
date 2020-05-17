import { package1Name } from "./index";

it('exports correct name', () => {
    expect(package1Name).toEqual('package1')
})