import { Input } from "@nextui-org/react"
import { SearchIcon } from "./icons"
import { ReactElement } from "react"

interface InputProps {
    placeholder?: string,
    endContent?: ReactElement
}

export const SearchInput = (props: InputProps) => {
    return(
        <Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={props.endContent}
			labelPlacement="outside"
			placeholder={props.placeholder}
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
    )
}