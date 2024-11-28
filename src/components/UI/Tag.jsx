import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../useContext/context'
import PropTypes from 'prop-types'

const Tag = ({tagName}) => {
    const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme === "light" ? "bg-[#E5E7EB] text-[#4B5563]" : "bg-[#374151] text-[#D1D5DB]"} leading-5 font-medium px-4 text-[0.875rem] w-fit mx-auto  h-[28px] rounded-xl `}>
        {tagName}
    </div>
  )
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
}

export default Tag