
const express = require('express');
const { addNewCampaign, getAllCampaignsList, isFavouriteCampaign, updateCampaign, deleteCampaign, uploadImage, getCampaign, getAllCampaignsRequestList, updateCampaignRequest,requestToJoinCampaign,getRequestedUserList,updateRequestToJoinCampaign } = require('../controllers/campaign.controller');
const router = express.Router();
const authenticate = require('../../middleware/authenticate');
const upload = require('../../middleware/multer')



router.post('/addNewCampaign', authenticate, addNewCampaign)
router.get('/getAllCampaigns', getAllCampaignsList)
router.put('/favouiteCampaigns/:campaignId', authenticate, isFavouriteCampaign)
router.put('/updateCampaign/:campaignId', authenticate, updateCampaign)
router.delete('/deleteCampaign/:campaignId', authenticate, deleteCampaign)
router.post('/uploadImage', upload.single('image'), authenticate, uploadImage)
router.get('/getCampaign/:campaignId', authenticate, getCampaign);
router.get('/getAllCampaignsRequestList'  , getAllCampaignsRequestList);
router.post('/updateCampaignRequest' , authenticate , updateCampaignRequest);
router.post('/requestToJoinCampaign'  , requestToJoinCampaign);
router.post('/getRequestedUserList'  , getRequestedUserList);
router.post('/updateRequestToJoinCampaign'  , updateRequestToJoinCampaign);


module.exports = router;