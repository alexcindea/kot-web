import {
  homepageContentType,
  homepageEventType,
  homepageProjectType,
} from '@/sanity/schemaTypes/homepageContent'
import {
  aboutMilestonePhotosType,
  aboutMilestoneType,
  eventPhotosType,
  groupPhotosType,
  projectPhotosType,
  sitePhotoAssetType,
  sitePhotosType,
  staffPhotosType,
} from '@/sanity/schemaTypes/sitePhotos'
import { postImageType, postType } from '@/sanity/schemaTypes/post'
import { sponsorLogoType, sponsorType } from '@/sanity/schemaTypes/sponsor'

export const schemaTypes = [
  homepageProjectType,
  homepageEventType,
  homepageContentType,
  sitePhotoAssetType,
  aboutMilestoneType,
  aboutMilestonePhotosType,
  groupPhotosType,
  staffPhotosType,
  projectPhotosType,
  eventPhotosType,
  sitePhotosType,
  postImageType,
  postType,
  sponsorLogoType,
  sponsorType,
]
