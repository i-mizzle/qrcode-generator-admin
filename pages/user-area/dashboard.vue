<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="dashboard-card shadowed-box">
                <h2 class="font-primary font-bold">33</h2>
                <img src="../../assets/img/hospital.svg" alt="" class="box-icon">
                <p>Hospitals recruiting for your position<br>
                  <a class="clear-both">See all openings</a>
                </p>
              </div>
              <div class="dashboard-card dark">
                <h2 class="font-secondary font-bold">19</h2>
                <img src="../../assets/img/find.svg" alt="" class="box-icon">
                <p>Profile visits in 3 months<br>
                  <a class="clear-both">See visits</a>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="dashboard-card tall shadowed-box">
                <p class="font-grey font-bold">Your profile</p>

                <div class="pos-rlt">
                  <md-avatar class="md-avatar-icon md-large float-left">
                    <img src="../../assets/img/user-placeholder.jpg" alt="Avatar">
                  </md-avatar>
                  <p class="float-left ml-3 font-bold">Miss Eunice Obonyilor <br>
                    <span class="font-thin font-grey">Medical Doctor</span>
                  </p>
                  <div class="rating-stars ml-3 float-left">
                    <img src="../../assets/img/star-fill.svg" alt="" class="star-icon">
                    <img src="../../assets/img/star-fill.svg" alt="" class="star-icon">
                    <img src="../../assets/img/star-fill.svg" alt="" class="star-icon">
                    <img src="../../assets/img/star-fill.svg" alt="" class="star-icon">
                    <img src="../../assets/img/star-outline.svg" alt="" class="star-icon">
                  </div>
                </div>

                <hr class="clear-both">

                <label>Specialization</label>
                <p>Internal Medicine</p>

                <label>Experience</label>
                <p>5 years post med-school</p>

                <p class="float-right mb-2"><a>See full profile</a></p>
              </div>
            </div>

            <div class="col-md-12">
              <h6 class="title mt-4">Latest Openings</h6>
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
                  <a @click="toggleShareJobModal()"><img src="../../assets/img/share.svg" alt="" class="share-icon"></a>
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
                  <a><img src="../../assets/img/share.svg" alt="" class="share-icon"></a>
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
                  <a><img src="../../assets/img/share.svg" alt="" class="share-icon"></a>
                  <md-tooltip md-direction="right">Share Job</md-tooltip>
                </span>
              </div>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <Calendar />
          
          <h6 class="title mt-4">Upcoming Appointments</h6>
          <div class="underline"></div>

          <p class="text-grey">St. John's Hospital, Jabi<br>
            12/04/2020, 10am
          </p>
          <hr>
          <p class="text-grey">St. John's Hospital, Jabi<br>
            12/04/2020, 10am
          </p>
          <hr>
          <p class="text-grey">St. John's Hospital, Jabi<br>
            12/04/2020, 10am
          </p>
          <hr>
          <p class="text-grey">St. John's Hospital, Jabi<br>
            12/04/2020, 10am
          </p>
          <hr>

        </div>
      </div>
    </div>
    <JobShare />
  </section>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import JobShare from '~/components/JobShare.vue'
export default {
  components: {
    Calendar,
    JobShare
  },
  data: () => ({
    dialogActive: false,
    value: null
  }),
  methods: {
    toggleShareJobModal () {
      this.$store.commit('global/toggleShareJobModal')
    },
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    }
  },
  mounted( ) {

  }
}
</script>

<style lang="scss" scoped>
  .dashboard-card {
    min-height:100px;
    position: relative;
  }
  .dashboard-card.tall{
    min-height: 290px
  }
  .title{
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
  }
  img.box-icon{
    position: absolute;
    top:20px;
    right:10px;
    width:70px;
    // color: #286888;
    // z-index:-1;
  }
</style>