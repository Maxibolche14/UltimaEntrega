import { UserAdminPipe } from './user-admin.pipe';

describe('UserAdminPipe', () => {
  it('create an instance', () => {
    const pipe = new UserAdminPipe();
    expect(pipe).toBeTruthy();
  });
});
