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
        beforeEach(() => {
            const props = {
                buttonText: 'Exmaple Button Text',
                emitEvent: () => {

                }
            };
            wrapper = setUp(props);
        });

        it('Should render a button', () => {
            const header = findByTestAtrr(wrapper, 'buttonComponent');
            expect(header.length).toBe(1);
        })

    })

});