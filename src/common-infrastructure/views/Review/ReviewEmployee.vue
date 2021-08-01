import Vue from 'vue' import RatingBox from '' new Vue({ el: '#app', template: '
<Rating :grade="2" />
', components: { Rating } })
