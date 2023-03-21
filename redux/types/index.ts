import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  GET_ITEM_FILTER,
} from '../actions/actionType';

export interface Item {
  kind: string;
  data: {
    approved_at_utc: null;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: Array<any>;
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: null;
    hide_score: boolean;
    name: string;
    quarantine: false;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: null;
    ups: number;
    total_awards_received: number;
    media_embed: any;
    thumbnail_width: number;
    author_flair_template_id: null;
    is_original_content: boolean;
    user_reports: Array<any>;
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: any;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: Array<any>;
    gildings: any;
    post_hint: string;
    content_categories: null;
    is_self: boolean;
    subreddit_type: string;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: true;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: any;
    all_awardings: Array<any>;
    awarders: Array<any>;
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: null;
    treatment_tags: Array<any>;
    visited: boolean;
    removed_by: null;
    mod_note: null;
    distinguished: null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: null;
    num_reports: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: true;
    report_reasons: null;
    author: 'jrocawear';
    discussion_type: null;
    num_comments: 0;
    send_replies: true;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: Array<any>;
    author_patreon_flair: boolean;
    author_flair_text_color: null;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: null;
    is_video: boolean;
  };
}

export interface GetItemSuccessPayload {
  items: Item[];
}

export interface GetItemFailurePayload {
  error: string;
}

export interface GetItemFilterPayload {
  query: string;
}

export interface GetItemRequest {
  type: typeof GET_ITEM_REQUEST;
}

export interface GetItemSuccess {
  type: typeof GET_ITEM_SUCCESS;
  payload: GetItemSuccessPayload;
}

export interface GetItemFailure {
  type: typeof GET_ITEM_FAILURE;
  payload: GetItemFailurePayload;
}

export interface GetItemFilter {
  type: typeof GET_ITEM_FILTER;
  payload: GetItemFilterPayload;
}
