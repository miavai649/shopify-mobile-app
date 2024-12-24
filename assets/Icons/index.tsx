import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

interface SvgComponentProps extends SvgProps {}

export const DropdownIcon = (props: SvgComponentProps) => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
    <Path
      d='M7 10L12 15L17 10'
      stroke='#0E0C0C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const MenuIcon = (props: SvgComponentProps) => (
  <Svg width={28} height={28} viewBox='0 0 28 28' fill='none' {...props}>
    <Path
      d='M4.66602 7H23.3327M4.66602 14H23.3327M4.66602 21H23.3327'
      stroke='#0E0C0C'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const SearchIcon = (props: SvgComponentProps) => (
  <Svg width={28} height={28} viewBox='0 0 28 28' fill='none' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.83301 12.5594C5.83304 9.35064 8.09979 6.58873 11.247 5.96286C14.3941 5.33698 17.5451 7.02145 18.7729 9.98608C20.0006 12.9507 18.9631 16.3698 16.295 18.1522C13.6268 19.9347 10.071 19.584 7.80234 17.3148C6.54136 16.0535 5.83299 14.343 5.83301 12.5594Z'
      stroke='#0E0C0C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M19.2832 19.2842L22.166 22.167'
      stroke='#0E0C0C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const ProfileIcon = (props: SvgComponentProps) => (
  <Svg width={28} height={28} viewBox='0 0 28 28' fill='none' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.8898 16.333H11.1101C9.40902 16.4175 7.90195 17.4565 7.21809 19.0163C6.39326 20.6357 8.03942 22.1663 9.95392 22.1663H18.0459C19.9616 22.1663 21.6078 20.6357 20.7818 19.0163C20.0979 17.4565 18.5908 16.4175 16.8898 16.333Z'
      stroke='#0E0C0C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5 9.33301C17.5 11.266 15.933 12.833 14 12.833C12.067 12.833 10.5 11.266 10.5 9.33301C10.5 7.40001 12.067 5.83301 14 5.83301C14.9283 5.83301 15.8185 6.20176 16.4749 6.85813C17.1313 7.51451 17.5 8.40475 17.5 9.33301Z'
      stroke='#0E0C0C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const CartIcon = (props: SvgComponentProps) => (
  <Svg width={28} height={28} viewBox='0 0 24 24' fill='none' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.694 7.55504H8.26001L8.91201 13.944L16.2 13.214C16.6551 13.2156 17.0783 12.9809 17.318 12.594L18.812 9.49404C19.0529 9.09564 19.0581 8.59777 18.8255 8.19445C18.593 7.79112 18.1595 7.54617 17.694 7.55504Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.66702 19.063C9.66481 19.5778 9.24612 19.9935 8.73136 19.992C8.2166 19.9906 7.80029 19.5725 7.80103 19.0577C7.80176 18.543 8.21926 18.126 8.73402 18.126C8.98199 18.1266 9.2196 18.2256 9.39458 18.4013C9.56955 18.577 9.66755 18.8151 9.66702 19.063V19.063Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.2669 19.063C15.2647 19.5778 14.846 19.9935 14.3312 19.992C13.8165 19.9906 13.4001 19.5725 13.4009 19.0577C13.4016 18.543 13.8191 18.126 14.3339 18.126C14.5818 18.1266 14.8195 18.2256 14.9944 18.4013C15.1694 18.577 15.2674 18.8151 15.2669 19.063V19.063Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M7.53326 7.74034C7.63561 8.14171 8.04395 8.38411 8.44532 8.28176C8.84669 8.17941 9.08909 7.77106 8.98674 7.36969L7.53326 7.74034ZM7.636 5.10801L8.36281 4.92267L8.36017 4.91288L7.636 5.10801ZM7.493 5.00001V5.75009L7.50342 5.74994L7.493 5.00001ZM5 4.25001C4.58579 4.25001 4.25 4.5858 4.25 5.00001C4.25 5.41423 4.58579 5.75001 5 5.75001V4.25001ZM8.94322 14.6934C9.35707 14.6761 9.67859 14.3267 9.66135 13.9128C9.64411 13.4989 9.29464 13.1774 8.88078 13.1947L8.94322 14.6934ZM8.912 16.25L8.88078 16.9994C8.89118 16.9998 8.90159 17 8.912 17L8.912 16.25ZM15.554 17C15.9682 17 16.304 16.6642 16.304 16.25C16.304 15.8358 15.9682 15.5 15.554 15.5V17ZM8.98674 7.36969L8.36274 4.92269L6.90926 5.29334L7.53326 7.74034L8.98674 7.36969ZM8.36017 4.91288C8.25358 4.51729 7.89224 4.2444 7.48258 4.25009L7.50342 5.74994C7.22726 5.75378 6.98369 5.56982 6.91183 5.30315L8.36017 4.91288ZM7.493 4.25001H5V5.75001H7.493V4.25001ZM8.88078 13.1947C7.86094 13.2371 7.05603 14.0763 7.05603 15.097H8.55603C8.55603 14.8804 8.72682 14.7024 8.94322 14.6934L8.88078 13.1947ZM7.05603 15.097C7.05603 16.1177 7.86094 16.9569 8.88078 16.9994L8.94322 15.5007C8.72682 15.4916 8.55603 15.3136 8.55603 15.097H7.05603ZM8.912 17H15.554V15.5H8.912V17Z'
      fill='black'
    />
  </Svg>
)
