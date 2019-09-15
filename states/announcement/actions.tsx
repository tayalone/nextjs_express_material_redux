import { Dispatch, AnyAction } from 'redux';

export const UPDATE_ANNOUNCEMENT = '[Announcement] update';

export const updateAnnouncement = (message: string) => (
  dispatch: Dispatch
): AnyAction => {
  return dispatch({ type: UPDATE_ANNOUNCEMENT, message });
};
