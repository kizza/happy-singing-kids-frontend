import classnames from "classnames"
import React from "react"

export interface StyledProps {
  styles: string[];
}

type Stylable = (...props: any) => JSX.Element

// The original component parameters + our styled props
type WithStyledProps<T extends Stylable> = Parameters<T> & StyledProps

// The augmented styled props, minus our styled props (explicit for typescript)
// type WithoutStyledProps<T extends Stylable> = Pick<WithStyledProps<T>, Exclude<keyof Parameters<T>, "styles">>

// Our stylable component, that will take it's original props, and return something childrenable
// type Stylable<T extends FC> = (attributes: WithoutStyledProps<T>) =>
//   ReturnType<T>// & {children?: ReactNode}

interface StyledOptions { wrap: boolean }

const WithStyles = <T extends Stylable>(func: T, options: StyledOptions) => {
  return (...args: WithStyledProps<T>) => {
    if (options.wrap === false) {
      return func({
        ...args[0],
        styles: args[0].styles || [],
      } as WithStyledProps<T>)
    } else {
      const { styles, ...other } = args
      return (
        <div className={classnames(styles)}>
          test
          {func(other)}
        </div>
      )
    }
  }
}

export default WithStyles
