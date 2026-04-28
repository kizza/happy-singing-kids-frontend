import classnames from "classnames"
import React from "react"

export interface StyledProps {
  styles: string[];
}

type Stylable<P = {}> = (props: P) => React.ReactNode

// The original component parameters + our styled props
type WithStyledProps<P> = P & StyledProps

// The augmented styled props, minus our styled props (explicit for typescript)
// type WithoutStyledProps<T extends Stylable> = Pick<WithStyledProps<T>, Exclude<keyof Parameters<T>, "styles">>

// Our stylable component, that will take it's original props, and return something childrenable
// type Stylable<T extends FC> = (attributes: WithoutStyledProps<T>) =>
//   ReturnType<T>// & {children?: ReactNode}

interface StyledOptions { wrap: boolean }

const WithStyles = <P,>(
  func: (props: P) => React.ReactNode,
  options: StyledOptions
) => {
  return (props: P & Partial<StyledProps>) => {
    const styles = props.styles ?? []
    const { styles: _, ...rest } = props

    if (options.wrap === false) {
      return func({
        ...(rest as P),
        styles,
      } as P)
    } else {
      return (
        <div className={classnames(styles)}>
          {func(rest as P)}
        </div>
      )
    }
  }
}

export default WithStyles
