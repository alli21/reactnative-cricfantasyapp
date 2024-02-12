// import React from "react"
// // import { useSelector } from 'react-redux';
// import Store from "../redux/store"
// import { switchMode } from "../redux/actions";

// const state = Store().getState()

// const theme = state.theme
// // // initialize action dispatcher
// // // define a component mode state
// const mode = theme.mode

// console.log("This is mode in colors file", mode)


export const LIGHT_THEME = {
  mode: 'light',
  primary_blue: '#2a74ea',
  statusbar_content: 'dark-content',
  background_primary: "#ffffff",
  text_primary: '#000000',
  text_secondary: '#fff',
  white: '#ffffff',
  black: '#000000',
  greyColour: '#868686',
  primary_red: "#D22B2B",
  green: "green",
  wishlist_text: '#c4c4c4',
}

export const DARK_THEME = {
  mode: 'dark',
  primary_blue: '#2a74ea',
  statusbar_content: 'light-content',
  background_primary: "rgba(0,0,0,0.93)",
  text_primary: '#FFFFFF',
  text_secondary: '#000',
  white: '#ffffff',
  black: '#000000',
  greyColour: '#868686',
  primary_red: "#D22B2B",
  green: "green",
  wishlist_text: '#c4c4c4',

}

export default {
  primary_blue: '#2e70eb',
  secondary_blue: "#5c4af9",
  text_primary: '#404040',
  primary_yellow: '#efb932',
  background_secondary: '#f5f7fb',
  secondary_yellow: '',
  white: '#ffffff',
  black: '#000000',
  greyColour: '#868686',
  primary_red: "#D22B2B",
  green: "green",
  wishlist_text: '#c4c4c4',
}
