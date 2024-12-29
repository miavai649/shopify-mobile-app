import React from 'react'
import Svg, {
  Path,
  SvgProps,
  Defs,
  ClipPath,
  Rect,
  G,
  Circle
} from 'react-native-svg'

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

export const CloseIcon = (props: SvgComponentProps) => (
  <Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
    <Path
      d='M1.14735 14.8521C1.19379 14.8986 1.24893 14.9354 1.30963 14.9606C1.37033 14.9858 1.43539 14.9987 1.5011 14.9987C1.56681 14.9987 1.63187 14.9858 1.69257 14.9606C1.75327 14.9354 1.80841 14.8986 1.85485 14.8521L7.99985 8.70708L14.1473 14.8521C14.2412 14.9459 14.3684 14.9986 14.5011 14.9986C14.6338 14.9986 14.761 14.9459 14.8548 14.8521C14.9487 14.7583 15.0014 14.631 15.0014 14.4983C15.0014 14.3656 14.9487 14.2384 14.8548 14.1446L8.70735 7.99957L14.8523 1.85207C14.9462 1.75825 14.9989 1.63101 14.9989 1.49832C14.9989 1.36564 14.9462 1.2384 14.8523 1.14457C14.7585 1.05075 14.6313 0.998047 14.4986 0.998047C14.3659 0.998047 14.2387 1.05075 14.1448 1.14457L7.99985 7.29208L1.85235 1.14707C1.7567 1.06516 1.63366 1.02236 1.50782 1.02722C1.38198 1.03208 1.26262 1.08425 1.17357 1.17329C1.08452 1.26234 1.03235 1.38171 1.02749 1.50755C1.02263 1.63339 1.06544 1.75642 1.14735 1.85207L7.29235 7.99957L1.14735 14.1471C1.05422 14.2408 1.00195 14.3675 1.00195 14.4996C1.00195 14.6317 1.05422 14.7584 1.14735 14.8521Z'
      fill='#555353'
    />
  </Svg>
)

export const SmallSearchIcon = (props: SvgComponentProps) => (
  <Svg width={21} height={21} viewBox='0 0 21 21' fill='none' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.86328 9.13662C4.8633 6.84463 6.48241 4.87184 8.73039 4.42478C10.9784 3.97772 13.2291 5.18092 14.106 7.29851C14.983 9.4161 14.242 11.8583 12.3361 13.1315C10.4302 14.4046 7.89043 14.1542 6.26995 12.5333C5.36925 11.6324 4.86327 10.4106 4.86328 9.13662Z'
      stroke='#555353'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M14.4727 13.9414L16.5318 16.0006'
      stroke='#555353'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export const LeftArrowIcon = (props: SvgComponentProps) => (
  <Svg width={32} height={32} viewBox='0 0 32 32' fill='none' {...props}>
    <G clipPath='url(#clip0_1233_8863)'>
      <Path
        d='M0.366625 16.8848C0.367001 16.8852 0.367313 16.8856 0.36775 16.886L6.89925 23.386C7.38856 23.8729 8.18 23.8711 8.66706 23.3818C9.15406 22.8924 9.15219 22.101 8.66287 21.614L4.27762 17.25H30.75C31.4404 17.25 32 16.6904 32 16C32 15.3096 31.4404 14.75 30.75 14.75H4.27769L8.66281 10.386C9.15213 9.899 9.154 9.10757 8.667 8.61825C8.17994 8.12882 7.38844 8.12713 6.89919 8.61401L0.367687 15.114C0.367311 15.1144 0.366999 15.1148 0.366562 15.1152C-0.123001 15.6038 -0.121437 16.3978 0.366625 16.8848Z'
        fill='#FDFDFD'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_1233_8863'>
        <Rect
          width={32}
          height={32}
          fill='white'
          transform='matrix(-1 0 0 -1 32 32)'
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export const RightArrowIcon = (props: SvgComponentProps) => (
  <Svg width={32} height={32} viewBox='0 0 32 32' fill='none' {...props}>
    <G clipPath='url(#clip0_1233_8871)'>
      <Path
        d='M31.6334 15.1152C31.633 15.1148 31.6327 15.1144 31.6322 15.114L25.1007 8.614C24.6114 8.12706 23.82 8.12887 23.3329 8.61825C22.8459 9.10756 22.8478 9.899 23.3371 10.386L27.7224 14.75H1.25C0.559625 14.75 0 15.3096 0 16C0 16.6904 0.559625 17.25 1.25 17.25H27.7223L23.3372 21.614C22.8479 22.101 22.846 22.8924 23.333 23.3817C23.8201 23.8712 24.6116 23.8729 25.1008 23.386L31.6323 16.886C31.6327 16.8856 31.633 16.8852 31.6334 16.8848C32.123 16.3962 32.1214 15.6022 31.6334 15.1152Z'
        fill='#FDFDFD'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_1233_8871'>
        <Rect width={32} height={32} fill='white' />
      </ClipPath>
    </Defs>
  </Svg>
)

export const FilledCircleIcon = (props: SvgComponentProps) => (
  <Svg width={7} height={7} viewBox='0 0 7 7' fill='none' {...props}>
    <Circle cx={3.5} cy={3.14062} r={3} fill='#FDFDFD' />
  </Svg>
)

export const OutlineCircleIcon = (props: SvgComponentProps) => (
  <Svg width={7} height={7} viewBox='0 0 7 7' fill='none' {...props}>
    <Circle cx={3.5} cy={3.14062} r={2.5} stroke='#FDFDFD' />
  </Svg>
)
