import { IService } from '@/types';

export const mockGetFfernFriend: IService.TGetFfernFriendResponse = {
  firstName: 'Queen',
  lastName: 'Test',
  addressLineOne: '123 Lovely St',
  addressLineTwo: '',
  city: 'London',
  stateOrCounty: 'State',
  postcode: '12345',
  country: 'GB',
  id: '',
  createdAt: 0,
  updatedAt: 0,
  subscribedAt: 0,
};

export const mockFfernFriendUpdateRequest: IService.TUpdateFfernFriendsRequest =
  {
    firstName: 'Queen',
    lastName: 'Test',
    addressLineOne: '123 Lovely St',
    addressLineTwo: '',
    city: 'London',
    stateOrCounty: 'State',
    postcode: '12345',
    country: 'GB',
  };

export const mockInvalidFfernFriend: IService.TUpdateFfernFriendsRequest = {
  firstName: '',
  lastName: 'Test',
  addressLineOne: '123 Lovely St',
  addressLineTwo: '',
  city: 'London',
  stateOrCounty: 'State',
  postcode: '12345',
  country: 'GB',
};
