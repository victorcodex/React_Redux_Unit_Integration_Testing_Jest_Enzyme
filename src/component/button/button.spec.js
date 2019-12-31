import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../Utils';
import SharedButton from './index';

const setUp = (props={}) => {
    const wrapper = shallow(<SharedButton {...props} />);
    return wrapper;
}

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                buttonText: 'Exmaple Button Text',
                emitEvent: () => {

                }
            };

            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();

        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Exmaple Button Text',
                emitEvent: mockFunc
            };
            wrapper = setUp(props);
        });

        it('Should render a button', () => {
            const header = findByTestAtrr(wrapper, 'buttonComponent');
            expect(header.length).toBe(1);
        })

        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })

    })

});