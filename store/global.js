export const state = () => ({
  shareJobModal: false,
  reviewResponseModal: false,
  isAuthenticated: false,
  authenticatedUser: {}
})

export const mutations = {
  toggleShareJobModal (state) {
    state.shareJobModal = !state.shareJobModal
  },
  toggleReviewResponseJobModal (state) {
    state.reviewResponseModal = !state.reviewResponseModal
  },
  authenticateUser (state, userDetails) {
    state.isAuthenticated = true
    state.authenticatedUser = userDetails
  }
}
