<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <div class="dashboard-card shadowed-box">
                <h2 class="font-primary font-bold">
                  {{ qrCodes.length }}
                </h2>
                <!-- <img src="../../assets/img/hospital.svg" alt="" class="box-icon"> -->
                <p>
                  QR Codes created
                </p>
              </div>
            </div>
            <div class="col-md-6" />

            <div class="col-md-12">
              <h6 class="title mt-4">
                QR Codes Generated
              </h6>
              <div class="underline" />

              <div v-for="qrCode of qrCodes" :key="qrCode._id" class="dashboard-card list shadowed-box">
                <img class="qr-code float-left" :src="qrCode.qrCodeUrl">
                <span class="float-left">
                  <h6 class="font-secondary font-bold mt-4">{{ qrCode.qrCodeData }}
                    <!-- <span class="badge bg-primary">5Km from you</span> -->
                  </h6>
                  <p class="font-grey">{{ qrCode.createdAt }}
                  </p>
                  <a class="badge bg-danger" @click="deleteQrCode(qrCode._id)">Delete QR Code</a>
                </span>

                <!-- <span class="badge bg-accent float-right">Profile Match</span>
                <span class="float-right">
                  <a @click="toggleShareJobModal()"><img src="../../assets/img/share.svg" alt="" class="share-icon"></a>
                  <md-tooltip md-direction="right">Share Job</md-tooltip>
                </span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <JobShare /> -->
  </section>
</template>

<script>
/* eslint-disable no-console */
// import Calendar from '~/components/Calendar.vue'
// import JobShare from '~/components/JobShare.vue'
export default {
  components: {
    // Calendar,
    // JobShare
  },
  data: () => ({
    dialogActive: false,
    value: null,
    userDetails: {},
    qrCodes: [],
    baseUrl: process.env.baseUrl
  }),
  beforeMount () {
    this.userDetails = this.$cookies.get('userdetails')
    this.loadQrCodes()
  },
  mounted () {
  },
  methods: {
    toggleShareJobModal () {
      this.$store.commit('global/toggleShareJobModal')
    },
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    },
    async loadQrCodes () {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userDetails.token
      }

      try {
        const response = await this.$axios.$get(this.baseUrl + 'qr/list', { headers })
        console.log('qr codes ==>', response)
        this.qrCodes = response.data
      } catch (e) {
        this.$toast.error(e)
        console.log(e)
      }
    },
    async deleteQrCode (id) {
      if (confirm('This QR Code will be deleted. Are you sure?')) {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.userDetails.token
        }

        try {
          const response = await this.$axios.$delete(this.baseUrl + 'qr/delete/' + id, { headers })
          console.log('qr codes ==>', response)
          this.$toast.success(response.data)
          this.loadQrCodes()
        } catch (e) {
          this.$toast.error(e)
          console.log(e.response)
        }
      }
    }
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
  .dashboard-card.list{
    padding:0px;
  }
  img.qr-code{
    width: 150px;
    margin-right: 15px;
  }
  a.badge{
    color: #fff;;
  }
  a.badge:hover{
    color: #f3b7b7;;
  }
</style>
