import PostsController from './posts';

const TYPES = [{
    name: '所有页面',
    value: null
}, {
    name: '草稿页面',
    value: 'draft'
}, {
    name: '公开的页面',
    value: 'published'
}, {
    name: '计划的页面',
    value: 'scheduled'
}, {
    name: '特色页面',
    value: 'featured'
}];

const ORDERS = [{
    name: '最新',
    value: null
}, {
    name: '最旧',
    value: 'published_at asc'
}, {
    name: '最近更新的',
    value: 'updated_at desc'
}];

/* eslint-disable ghost/ember/alias-model-in-controller */
export default PostsController.extend({
    init() {
        this._super(...arguments);
        this.availableTypes = TYPES;
        this.availableOrders = ORDERS;
    },

    actions: {
        openEditor(page) {
            this.transitionToRoute('editor.edit', 'page', page.get('id'));
        }
    }
});
