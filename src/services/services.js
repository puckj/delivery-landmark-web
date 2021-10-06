import { get, post } from './methods'

export const getLandmarkDetail = (p_text_search) => {
    return post('/api/saima/util/getLandmarkDetail', {
        p_text_search
    })
}
