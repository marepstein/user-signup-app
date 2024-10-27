# Senior Frontend Technical Test

The purpose of this technical test is to assess your ability as a frontend developer.

Finishing is not required — see where you get to with the time that you have.

## The Remit

Ffern is launching an influencer programme called "Ffern Friends".

Ffern friends are sent links that allow them to join the ledger without joining the waiting list.

To add a Ffern Friend to the ledger, we need to collect their shipping information.

You are building the page that Ffern Friends link directs to.

### Design Requirements

[The design file prepared by our deisgner is here.](https://www.figma.com/file/GXvrhMOyMYUw8vT92aq7PX/Tech-Test-for-Ffern-Frontend-Dev?type=design&node-id=0%3A1&mode=design&t=OO1avfvkYfGPisWq-1)

- Implement the designs on the file prepared by the deisgner.
- Implement both mobile and desktop; for the desktop layout, use your best judgement.
- Implement hover, active, and focus states for the relevant components.
- If you have time, add some thoughtful animations.
- Wow us with your css jazz.

### Technical Requirements

- Fork this respository and create a fresh project using Next.js.
- The pages router is preferred, since that is what we use at Ffern.
- The repository must be statically typed using Typescript.
- Use Zod to type any data structures that cannot be statically typed.
- Use React Query for data fetching and requests.
- Use tailwind to style React components.
- Gracefully handle states relating to data fetching and form submission.
- Only use features supported by iOS 15.4 and above.
- Think about the structure of links sent to Ffern friends.
- Use appropriate rendering strategies for optimal performance.
- Host the site on Vercel.

### API

Please note: this is a mock api — there is no database. So don't be surprised if GET requests don't reflect POST requests.

Currently, there is only one Ffern Friend. The id is siobhan-1234.

#### Authentication

All endpoints use Basic Authentication.

The credentials required to authorise access are:

Username: ffern-tech-test  
Password: iloveauthentication

#### Endpoints

The endpoints are:

Request method: GET  
Base Url: https://ffern-custodian.vercel.app  
Endpoint: /api/ffern-friends/[ffern-friend-id]

Response body:

```typescript
type GetFfernFriendResponse = {
  id: string;
  firstName?: string;
  lastName?: string;
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  postcode?: string;
  stateOrCounty?: string;
  country?: 'US' | 'NL' | 'GB';
  subscribedAt?: number; // UNIX timestamp
  createdAt: number; // UNIX timestamp
  updatedAt?: number; // UNIX timestamp
};
```

Request method: POST  
Base Url: https://ffern-custodian.vercel.app  
Endpoint: /api/ffern-friends/[ffern-friend-id]

Expected request body:

```typescript
type UpdateFfernFriendsRequest = {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: 'US' | 'NL' | 'GB';
};
```

Responses:

200

```typescript
type UpdateFfernFriendsSuccessResponse = {
  id: string;
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: 'US' | 'NL' | 'GB';
  createdAt: number; // UNIX timestamp
  updatedAt: number; // UNIX timestamp
  subscribedAt: number; // UNIX timestamp
};
```

40X/50X

```typescript
type UpdateFfernFriendsErrorResponse = {
  error: string;
  message: string;
};
```

#### A Warning

Be warned! The developers who implemented the endpoint were a shady lot. It is a little... buggy. Make sure to validate responses before consuming them in your application.

## Final Remarks

Don't worry if you don't get through everything. And have fun! This is an opportunity to show off your frontend skills. We want a flavor of what you can do.

After you are done, send us the hosted URL, and a link to the repository. Also include a link that would be sent to a Ffern friend. Niall needs access (niallpaterson on github.)

We will then go through the code with you.

If you have any questions, or are blocked in any way, reach out to Niall (niall@ffern.co).

### Developer Docs!

## Features

- Nextjs API for handling GET and POST requests to the 'db'
- Frontend Services to handle requests
- Error handling across three 'layers', with an Axios instance interceptor. Added for concise debugging.
- React Context to store FfernFriendId (maybe overkill but made this with the idea that the app could be future developed!)
- Tanstack Query for requests
- Zod for validation
- Flip card animation for desktop users - for a little extra spice!
- Server-side rendering - opted for server side rendering to boost performance and make sure user data was always up to date for accurate POST and GET

## Future Improvements

# Tests

Unfortunatley had some issues with jest and ModuleNameMapper (was previously working), which I ran out of time to fix. I have kept tests in files using .test.skip.ts for API services, and have the below for an example frontend implementation. With more time I would add tests at every level i.e component level, to modules, to page.

Signup page snapshot test:

```
import { renderWithProviders } from '@/test/rtl/render';
import { PersonalisedSignup } from './PersonalisedSignup';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { mockGetFfernFriend } from '@/test/__mocks__';

describe('<PeronalisedSignup />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = renderWithProviders(
      <PersonalisedSignup ffernFriend={mockGetFfernFriend} />
    );
    expect(container).toMatchSnapshot();
  });

  it('displays the video and form for signup', () => {
    const mockName = mockGetFfernFriend['firstName'];

    renderWithProviders(
      <PersonalisedSignup ffernFriend={mockGetFfernFriend} />
    );

    expect(screen.findByRole('img', { name: /video/i })).toBeInTheDocument();
    expect(screen.findByText(`${mockName}`)).toBeInTheDocument();

    expect(screen.findByRole('form')).toBeInTheDocument();
  });
});
```

# Further modularisation

Would like to extract things out in some of the components and tidy them up in places e.g. SignupContent - would ideally be from db or CMS etc

# Error handling

With more time, I would have liked to improve how the errors are handled in terms of how they look, and add more custom error routes. Additionally, were this to be in production, add error logging e.g. using Datadog

# Performance

Having looked at a lightning report, I'm aware that the video maybe causing performance issues, and potentially some other CLS issues (which could be solved with things like loading skeletons). With more time I would have liked to implement these, as well as lazy loading for the video. Also, seems to be a bit of a bug on IOS with the video opening when scrolling to the top - would fix this!

# Loading Spinners

Add loading spinners on the overall app! Hoped to use React Suspense - would try implement this for better user experience and performance.
