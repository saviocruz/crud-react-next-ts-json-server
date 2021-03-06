import React from "react";
import { FormField, GridColumn, SemanticWIDTHS } from "semantic-ui-react";
interface Props {
    titulo: string;
    name: string;
    required?: boolean;
    width: SemanticWIDTHS;
    maxLength?: number
    value: any;
    handleChange: any;
    placeholder?: string;
    autoFocus?: boolean
}

function GridInputNoCollum({ titulo, name, required, width, maxLength, value, handleChange, placeholder, autoFocus }: Props) {
    return (
        <React.Fragment>
       
                <FormField>
                    <label htmlFor={name}>{titulo}</label>
                    <input type="text" name={name} id={name} value={value}
                        required={required}
                        maxLength={maxLength}
                        onChange={handleChange}
                        placeholder={placeholder}
                        autoFocus={autoFocus} />
                </FormField>
       
        </React.Fragment>
    )
}

export default GridInputNoCollum