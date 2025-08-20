'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Button } from './button'
import { Badge } from './badge'
import { Textarea } from './textarea'
import { Label } from './label'
import { Checkbox } from './checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import {
  Calendar, MapPin, Trophy, Users, Target,
  Upload, Plus, Minus, Database, Warning,
  CheckCircle, Clock
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface ParticipantResult {
  name: string
  division: string
  classification: string
  finalTime: string
  hitFactor: string
  placement: number
  penalties: string
  notes: string
}

export function ResultsSubmissionForm() {
  const [formData, setFormData] = useState({
    // Event Information
    eventName: '',
    eventType: '',
    discipline: '',
    date: '',
    venue: '',
    address: '',
    
    // Match Details
    director: '',
    stages: '',
    rounds: '',
    description: '',
    
    // Contact Information
    submitterName: '',
    submitterEmail: '',
    submitterRole: '',
    
    // Additional Info
    practiscoreId: '',
    websiteUrl: '',
    photographyPermission: false,
    dataAccuracy: false
  })

  const [participants, setParticipants] = useState<ParticipantResult[]>([
    {
      name: '',
      division: '',
      classification: '',
      finalTime: '',
      hitFactor: '',
      placement: 1,
      penalties: '',
      notes: ''
    }
  ])

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const eventTypes = [
    'USPSA Match',
    'IDPA Match', 
    'Steel Challenge',
    '3-Gun Competition',
    'Precision Rifle',
    'Shotgun Sports',
    'Club Match',
    'Fun Match',
    'Training Event'
  ]

  const disciplines = [
    'Action Pistol',
    'Defensive Pistol',
    'Steel Challenge',
    '3-Gun',
    'Precision Rifle',
    'Practical Shotgun',
    'Multi-Gun'
  ]

  const divisions = [
    'Open',
    'Limited',
    'Limited-10',
    'Production',
    'Carry Optics',
    'PCC',
    'Single Stack',
    'Revolver',
    'CDP',
    'SSP',
    'ESP',
    'CCP',
    'BUG'
  ]

  const classifications = [
    'Grandmaster',
    'Master',
    'A Class',
    'B Class', 
    'C Class',
    'D Class',
    'Unclassified'
  ]

  const addParticipant = () => {
    setParticipants([...participants, {
      name: '',
      division: '',
      classification: '',
      finalTime: '',
      hitFactor: '',
      placement: participants.length + 1,
      penalties: '',
      notes: ''
    }])
  }

  const removeParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index))
  }

  const updateParticipant = (index: number, field: keyof ParticipantResult, value: string | number) => {
    const updated = [...participants]
    updated[index] = { ...updated[index], [field]: value }
    setParticipants(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    // Simulate API submission
    setTimeout(() => {
      setSubmitStatus('success')
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 2000)
  }

  if (submitStatus === 'success') {
    return (
      <Card className="text-center">
        <CardContent className="p-4xl">
          <div className="space-y-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-lg">
              <CheckCircle className="size-10 text-success" />
            </div>
            <h2 className="font-rajdhani text-heading-2xl font-bold text-card-foreground">
              Results Submitted Successfully!
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Thank you for contributing to the Idaho Shooting Sports Archive. 
              Your submission will be reviewed and added to the database within 2-3 business days.
            </p>
            <div className="space-y-sm">
              <Badge variant="success" size="sm">
                Submission ID: #ASA-{Date.now().toString().slice(-6)}
              </Badge>
              <p className="text-body-xs text-muted-foreground">
                You'll receive a confirmation email shortly
              </p>
            </div>
            <Button 
              onClick={() => window.location.reload()} 
              className="gap-sm"
              animationType="arrow"
            >
              Submit Another Event
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-xl">
      
      {/* Event Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-xs font-rajdhani">
            <Calendar className="size-5 text-rusty-orange" />
            Event Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-lg pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="space-y-xs">
              <Label htmlFor="eventName">Event Name *</Label>
              <Input
                id="eventName"
                placeholder="e.g., Monthly USPSA Match"
                value={formData.eventName}
                onChange={(e) => setFormData({...formData, eventName: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-xs">
              <Label htmlFor="eventType">Event Type *</Label>
              <Select value={formData.eventType} onValueChange={(value) => setFormData({...formData, eventType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-xs">
              <Label htmlFor="discipline">Discipline *</Label>
              <Select value={formData.discipline} onValueChange={(value) => setFormData({...formData, discipline: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select discipline" />
                </SelectTrigger>
                <SelectContent>
                  {disciplines.map((discipline) => (
                    <SelectItem key={discipline} value={discipline}>
                      {discipline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-xs">
              <Label htmlFor="date">Event Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>

            <div className="space-y-xs">
              <Label htmlFor="venue">Venue *</Label>
              <Input
                id="venue"
                placeholder="e.g., Boise Gun Club"
                value={formData.venue}
                onChange={(e) => setFormData({...formData, venue: e.target.value})}
                required
              />
            </div>

            <div className="space-y-xs">
              <Label htmlFor="address">Venue Address</Label>
              <Input
                id="address"
                placeholder="City, State"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Match Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-xs font-rajdhani">
            <Target className="size-5 text-rusty-orange" />
            Match Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-lg pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
            <div className="space-y-xs">
              <Label htmlFor="director">Match Director</Label>
              <Input
                id="director"
                placeholder="Director name"
                value={formData.director}
                onChange={(e) => setFormData({...formData, director: e.target.value})}
              />
            </div>
            
            <div className="space-y-xs">
              <Label htmlFor="stages">Number of Stages</Label>
              <Input
                id="stages"
                type="number"
                placeholder="6"
                value={formData.stages}
                onChange={(e) => setFormData({...formData, stages: e.target.value})}
              />
            </div>

            <div className="space-y-xs">
              <Label htmlFor="rounds">Round Count</Label>
              <Input
                id="rounds"
                type="number"
                placeholder="150"
                value={formData.rounds}
                onChange={(e) => setFormData({...formData, rounds: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-xs">
            <Label htmlFor="description">Event Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the event, special features, conditions, etc."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Participants & Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-xs font-rajdhani">
            <Trophy className="size-5 text-rusty-orange" />
            Participants & Results
          </CardTitle>
          <p className="text-body-sm text-muted-foreground">
            Add participant results. You can submit partial results and update later.
          </p>
        </CardHeader>
        <CardContent className="p-lg pt-0">
          <div className="space-y-lg">
            {participants.map((participant, index) => (
              <div key={index} className="p-lg bg-muted/30 rounded-xs border border-border/50">
                <div className="flex items-center justify-between mb-base">
                  <h4 className="font-rajdhani font-semibold text-body-lg">
                    Participant {index + 1}
                  </h4>
                  {participants.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeParticipant(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Minus className="size-4" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base">
                  <div className="space-y-xs">
                    <Label>Shooter Name *</Label>
                    <Input
                      placeholder="Full name"
                      value={participant.name}
                      onChange={(e) => updateParticipant(index, 'name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-xs">
                    <Label>Division *</Label>
                    <Select 
                      value={participant.division} 
                      onValueChange={(value) => updateParticipant(index, 'division', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select division" />
                      </SelectTrigger>
                      <SelectContent>
                        {divisions.map((division) => (
                          <SelectItem key={division} value={division}>
                            {division}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-xs">
                    <Label>Classification</Label>
                    <Select 
                      value={participant.classification} 
                      onValueChange={(value) => updateParticipant(index, 'classification', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classifications.map((classification) => (
                          <SelectItem key={classification} value={classification}>
                            {classification}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-xs">
                    <Label>Final Placement</Label>
                    <Input
                      type="number"
                      placeholder="1"
                      value={participant.placement}
                      onChange={(e) => updateParticipant(index, 'placement', parseInt(e.target.value) || 1)}
                    />
                  </div>

                  <div className="space-y-xs">
                    <Label>Final Time</Label>
                    <Input
                      placeholder="123.45"
                      value={participant.finalTime}
                      onChange={(e) => updateParticipant(index, 'finalTime', e.target.value)}
                    />
                  </div>

                  <div className="space-y-xs">
                    <Label>Hit Factor</Label>
                    <Input
                      placeholder="7.8956"
                      value={participant.hitFactor}
                      onChange={(e) => updateParticipant(index, 'hitFactor', e.target.value)}
                    />
                  </div>

                  <div className="space-y-xs">
                    <Label>Penalties</Label>
                    <Input
                      placeholder="0M, 1A, 2C"
                      value={participant.penalties}
                      onChange={(e) => updateParticipant(index, 'penalties', e.target.value)}
                    />
                  </div>

                  <div className="space-y-xs">
                    <Label>Notes</Label>
                    <Input
                      placeholder="Optional notes"
                      value={participant.notes}
                      onChange={(e) => updateParticipant(index, 'notes', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addParticipant}
              className="w-full gap-sm"
            >
              <Plus className="size-4" />
              Add Another Participant
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submitter Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-xs font-rajdhani">
            <Users className="size-5 text-rusty-orange" />
            Your Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-lg pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="space-y-xs">
              <Label htmlFor="submitterName">Your Name *</Label>
              <Input
                id="submitterName"
                placeholder="Full name"
                value={formData.submitterName}
                onChange={(e) => setFormData({...formData, submitterName: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-xs">
              <Label htmlFor="submitterEmail">Email Address *</Label>
              <Input
                id="submitterEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.submitterEmail}
                onChange={(e) => setFormData({...formData, submitterEmail: e.target.value})}
                required
              />
            </div>

            <div className="space-y-xs">
              <Label htmlFor="submitterRole">Your Role</Label>
              <Select value={formData.submitterRole} onValueChange={(value) => setFormData({...formData, submitterRole: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match-director">Match Director</SelectItem>
                  <SelectItem value="range-officer">Range Officer</SelectItem>
                  <SelectItem value="stats-officer">Stats Officer</SelectItem>
                  <SelectItem value="participant">Participant</SelectItem>
                  <SelectItem value="spectator">Spectator/Family</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-xs">
              <Label htmlFor="practiscoreId">PractiScore ID</Label>
              <Input
                id="practiscoreId"
                placeholder="Optional - if available"
                value={formData.practiscoreId}
                onChange={(e) => setFormData({...formData, practiscoreId: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information & Consent */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-xs font-rajdhani">
            <Database className="size-5 text-rusty-orange" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-lg pt-0">
          <div className="space-y-lg">
            <div className="space-y-xs">
              <Label htmlFor="websiteUrl">Event Website/Results URL</Label>
              <Input
                id="websiteUrl"
                type="url"
                placeholder="https://practiscore.com/results/..."
                value={formData.websiteUrl}
                onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
              />
            </div>

            <div className="space-y-base">
              <div className="flex items-start gap-sm">
                <Checkbox
                  id="dataAccuracy"
                  checked={formData.dataAccuracy}
                  onCheckedChange={(checked) => setFormData({...formData, dataAccuracy: !!checked})}
                />
                <div className="space-y-xs">
                  <Label htmlFor="dataAccuracy" className="text-body-sm font-medium cursor-pointer">
                    I confirm that this information is accurate to the best of my knowledge *
                  </Label>
                  <p className="text-body-xs text-muted-foreground">
                    All submissions are reviewed before being added to the archive
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-sm">
                <Checkbox
                  id="photographyPermission"
                  checked={formData.photographyPermission}
                  onCheckedChange={(checked) => setFormData({...formData, photographyPermission: !!checked})}
                />
                <div className="space-y-xs">
                  <Label htmlFor="photographyPermission" className="text-body-sm font-medium cursor-pointer">
                    I have permission to submit this data publicly
                  </Label>
                  <p className="text-body-xs text-muted-foreground">
                    Ensure all participants would be comfortable with their results being public
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="text-center">
        <Button 
          type="submit" 
          size="lg" 
          className="gap-sm px-xl"
          disabled={submitStatus === 'submitting' || !formData.dataAccuracy}
          animationType="arrow"
        >
          {submitStatus === 'submitting' ? (
            <>
              <Clock className="size-4" />
              Submitting Results...
            </>
          ) : (
            <>
              <Upload className="size-4" />
              Submit Event Results
            </>
          )}
        </Button>
        
        <div className="mt-base max-w-md mx-auto">
          <div className="flex items-start gap-xs p-sm bg-muted/50 rounded-xs">
            <Warning className="size-4 text-muted-foreground mt-micro flex-shrink-0" />
            <p className="text-body-xs text-muted-foreground">
              Your submission will be reviewed within 2-3 business days. 
              You'll receive an email confirmation once it's been added to the archive.
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}