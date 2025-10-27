import { createAction } from "@reduxjs/toolkit";

export const likePost = createAction<LikePostPayload>('likePost')