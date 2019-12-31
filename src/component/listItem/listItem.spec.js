import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../Utils';
import ListItem from './index';

const setUp = (props={}) => {
    const wrapper = shallow(<ListItem {...props} />);
    return wrapper;
}

describe('ListItem Cmmponent', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw warning', () => {
            const expectedProps = {
                title: 'Example title',
                desc: 'Example desc'
            };
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example title',
                desc: 'Example desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });

    });

    describe('Should not render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Example desc'
            };
            wrapper = setUp(props);
        });

        it('Component is not rendered', () => {
            const title = findByTestAtrr(wrapper, "listItemComponent");
            expect(title.length).toBe(0);
        });

    });

});