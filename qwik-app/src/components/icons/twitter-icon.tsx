import {component$} from "@builder.io/qwik";

interface Props {
    width?: number
    height?: number
    class?: string
}

export const TwitterIcon = component$(({
                                           width = 24,
                                           height = 24,
                                           class: className = ''
                                       }: Props) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 1024 1024"
             fill="none"
             class={className}
             style="display:inline-block;vertical-align:middle;color:#1D9BF0"
             xmlns="http://www.w3.org/2000/svg">
                <g fill="#1D9BF0">
                    <path fill="currentColor"
                          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"/>
                </g>
        </svg>
    )
});
