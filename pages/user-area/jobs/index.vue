<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
              <h6 class="title mt-4">Openings</h6>
              <div class="underline"></div>

              <div class="dashboard-card list shadowed-box">
                <span class="float-left">
                  <h6 class="font-secondary font-bold">Dawaki Grace Hospital, Abuja  <span class="badge bg-primary">5Km from you</span></h6>
                  <p class="font-grey">Medical Doctor (Internal Medicine), 4 2-hour shifts a week<br>
                    #123 some street, some city, Nigeria
                  </p>
                </span>

                <span class="badge bg-accent float-right">Profile Match</span>
                <span class="float-right">
                  <a @click="toggleShareJobModal()"><img src="../../../assets/img/share.svg" alt="" class="share-icon"></a>
                  <md-tooltip md-direction="right">Share Job</md-tooltip>
                </span>
              </div>

              <div class="dashboard-card list shadowed-box">
                <span class="float-left">
                  <h6 class="font-secondary font-bold">Dawaki Grace Hospital, Abuja  <span class="badge bg-primary">5Km from you</span></h6>
                  <p class="font-grey">Medical Doctor (Internal Medicine), 4 2-hour shifts a week<br>
                    #123 some street, some city, Nigeria
                  </p>
                </span>

                <span class="badge bg-accent float-right">Profile Match</span>
                <span class="float-right">
                  <a><img src="../../../assets/img/share.svg" alt="" class="share-icon"></a>
                  <md-tooltip md-direction="right">Share Job</md-tooltip>
                </span>
              </div>

              <div class="dashboard-card list shadowed-box">
                <span class="float-left">
                  <h6 class="font-secondary font-bold">Dawaki Grace Hospital, Abuja  <span class="badge bg-primary">5Km from you</span></h6>
                  <p class="font-grey">Medical Doctor (Internal Medicine), 4 2-hour shifts a week<br>
                    #123 some street, some city, Nigeria
                  </p>
                </span>

                <span class="badge bg-accent float-right">Profile Match</span>
                <span class="float-right">
                  <a><img src="../../../assets/img/share.svg" alt="" class="share-icon"></a>
                  <md-tooltip md-direction="right">Share Job</md-tooltip>
                </span>
              </div>
            </div>

            <div class="col-md-4">
              <h6 class="title mt-4">Your Reviews</h6>
              <div class="underline mb-3"></div>

              <div class="review-container">
                <span class="float-right">
                  <a @click="toggleReviewResponseJobModal()"><img src="../../../assets/img/return.svg" alt="" class="respond-icon"></a>
                  <md-tooltip md-direction="right">Respond to review</md-tooltip>
                </span>
                <h6 class="font-secondary font-bold">Bizzare Noreaga</h6>
                <span class="p font-grey">Wednesday, 01-09-2020</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum, facilis quas sint.</p>
                <div class="rating-stars mb-2 mt-2">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-outline.svg" alt="" class="star-icon">
                </div>
                <p class="font-grey">Madonna Hospital, Makurdi</p>
                <hr>
              </div>

              <div class="review-container">
                <span class="float-right">
                  <a @click="toggleReviewResponseJobModal()"><img src="../../../assets/img/return.svg" alt="" class="respond-icon"></a>
                  <md-tooltip md-direction="right">Respond to review</md-tooltip>
                </span>
                <h6 class="font-secondary font-bold">Bizzare Noreaga</h6>
                <span class="p font-grey">Wednesday, 01-09-2020</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum, facilis quas sint.</p>
                <div class="rating-stars mb-2 mt-2">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-outline.svg" alt="" class="star-icon">
                </div>
                <p class="font-grey">Madonna Hospital, Makurdi</p>
                <hr>
              </div>

              <div class="review-container">
                <span class="float-right">
                  <a @click="toggleReviewResponseJobModal()"><img src="../../../assets/img/return.svg" alt="" class="respond-icon"></a>
                  <md-tooltip md-direction="right">Respond to review</md-tooltip>
                </span>
                <h6 class="font-secondary font-bold">Bizzare Noreaga</h6>
                <span class="p font-grey">Wednesday, 01-09-2020</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum, facilis quas sint.</p>
                <div class="rating-stars mb-2 mt-2">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-outline.svg" alt="" class="star-icon">
                </div>
                <p class="font-grey">Madonna Hospital, Makurdi</p>
                <hr>
              </div>

              <div class="review-container">
                <span class="float-right">
                  <a @click="toggleReviewResponseJobModal()"><img src="../../../assets/img/return.svg" alt="" class="respond-icon"></a>
                  <md-tooltip md-direction="right">Respond to review</md-tooltip>
                </span>
                <h6 class="font-secondary font-bold">Bizzare Noreaga</h6>
                <span class="p font-grey">Wednesday, 01-09-2020</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum, facilis quas sint.</p>
                <div class="rating-stars mb-2 mt-2">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-fill.svg" alt="" class="star-icon">
                  <img src="../../../assets/img/star-outline.svg" alt="" class="star-icon">
                </div>
                <p class="font-grey">Madonna Hospital, Makurdi</p>
                <hr>
              </div>

            </div>
      </div>
    </div>
    <JobShare />
    <ReviewResponse />
  </section>
</template>

<script>
import JobShare from '~/components/JobShare.vue'
import ReviewResponse from '~/components/ReviewResponse.vue'
export default {
  components: {
    JobShare,
    ReviewResponse
  },
  data: () => ({
    dialogActive: false,
    value: null
  }),
  methods: {
    toggleShareJobModal () {
      this.$store.commit('global/toggleShareJobModal')
    },
    toggleReviewResponseJobModal () {
      this.$store.commit('global/toggleReviewResponseJobModal')
    },
  },
  mounted( ) {

  }
}
</script>

<style lang="scss" scoped>
.review-container{
  height: inherit;
  padding: 10px 0px;
  position:relative;
  overflow:hidden;
}
img.respond-icon{
  width: 20px;
  position: absolute;
  top:5px;
  right: 5px;
}
</style>