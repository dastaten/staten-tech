export const contradictoryStyles = {
  'flex-row': ['flex-col', 'flex-row-reverse', 'flex-col-reverse'],
  'flex-col': ['flex-row', 'flex-row-reverse', 'flex-col-reverse'],
  'flex-row-reverse': ['flex-row', 'flex-col', 'flex-col-reverse'],
  'flex-col-reverse': ['flex-row', 'flex-col', 'flex-row-reverse'],
  'flex-wrap': ['flex-nowrap', 'flex-wrap-reverse'],
  'flex-nowrap': ['flex-wrap', 'flex-wrap-reverse'],
  'flex-wrap-reverse': ['flex-wrap', 'flex-nowrap'],
  'justify-start': ['justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-end': ['justify-start', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-center': ['justify-start', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-between': ['justify-start', 'justify-end', 'justify-center', 'justify-around', 'justify-evenly'],
  'justify-around': ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-evenly'],
  'justify-evenly': ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around'],
  'items-start': ['items-end', 'items-center', 'items-stretch'],
  'items-end': ['items-start', 'items-center', 'items-stretch'],
  'items-center': ['items-start', 'items-end', 'items-stretch'],
  'items-stretch': ['items-start', 'items-end', 'items-center']
};