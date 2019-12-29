import React from 'react';
import { shallow } from 'enzyme';
import Headline from "./index";

import { findByTestAtrr } from './../../../Utils';

const setUp = (props={}) => {
    const wrapper = shallow(<Headline {...props} />);
    return wrapper;
}

describe('Headline Component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })

    })


});