import React from 'react';
import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts actions', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [
            {
                title: 'Example title 1',
                body: 'Example body 1'
            },
            {
                title: 'Example title 2',
                body: 'Example body 2'
            },
            {
                title: 'Example title 3',
                body: 'Example body 3'
            }
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });

    });

});